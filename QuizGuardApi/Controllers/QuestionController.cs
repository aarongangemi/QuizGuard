using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using QuizGuardApi.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QuizGuardApi.Controllers
{
    [Route("api/questions")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly LiveContext liveContext;

        public QuestionController(LiveContext _liveContext)
        {
            liveContext = _liveContext;
        }

        // GET: api/<QuestionController>
        [HttpGet]
        public async Task<ContentResult> Get()
        {
            List<QuizQuestion> allQuestions = new List<QuizQuestion>();
            allQuestions.AddRange(QuestionData.MalwareQuestions);
            allQuestions.AddRange(QuestionData.PhishingQuestions);
            allQuestions.AddRange(QuestionData.MitmQuestions);
            allQuestions.AddRange(QuestionData.DdosQuestions);
            var json = JsonConvert.SerializeObject(allQuestions);
            return Content(json, "application/json");
        }

        [HttpPut]
        [Route("update-score")]
        public async Task<IActionResult> UpdateScore([FromBody] ScoreModel model)
        {
            await liveContext.QuizResults.AddAsync(new QuizResult
            {
                Score = model.CurrentScore
            });
            await liveContext.SaveChangesAsync();
            var userId = liveContext.QuizResults.OrderByDescending(x => x.Id).First().Id;
            var json = JsonConvert.SerializeObject(new QuizUserData { UserId = userId });
            return Content(json, "application/json");
        }
    }
}

