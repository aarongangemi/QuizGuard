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

        [HttpGet]
        public async Task<ContentResult> Get()
        {
            List<QuizQuestion> allQuestions = new List<QuizQuestion>();

            allQuestions.AddRange(QuestionData.MalwareQuestions);
            allQuestions.AddRange(QuestionData.PhishingQuestions);
            allQuestions.AddRange(QuestionData.MitmQuestions);
            allQuestions.AddRange(QuestionData.DdosQuestions);

            Shuffle(allQuestions);
            for(int i = 1; i <= allQuestions.Count(); i++)
            {
                allQuestions[i - 1].Order = i;
            }
            var json = JsonConvert.SerializeObject(allQuestions);
            return Content(json, "application/json");
        }

        private void Shuffle(List<QuizQuestion> list)
        {
            Random random = new Random();
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = random.Next(n + 1);
                QuizQuestion value = list[k];
                list[k] = list[n];
                list[n] = value;
            }
        }

        [HttpPut]
        [Route("update-score")]
        public async Task<IActionResult> UpdateScore([FromBody] ScoreModel model)
        {
            if(model.Id.HasValue)
            {
                var quizResult = liveContext.QuizResults.FirstOrDefault(x => x.Id == model.Id.Value);
                if(quizResult != null)
                {
                    quizResult.Score = model.CurrentScore;
                    liveContext.QuizResults.Update(quizResult);
                    await liveContext.SaveChangesAsync();

                    var jsonData = JsonConvert.SerializeObject(new QuizUserData { UserId = quizResult.Id });
                    return Content(jsonData, "application/json");
                }
            }

            await liveContext.QuizResults.AddAsync(new QuizResult
            {
                Score = model.CurrentScore
            });
            await liveContext.SaveChangesAsync();

            var userId = liveContext.QuizResults.Max(x => x.Id);
            var json = JsonConvert.SerializeObject(new QuizUserData { UserId = userId });
            return Content(json, "application/json");
        }
    }
}

