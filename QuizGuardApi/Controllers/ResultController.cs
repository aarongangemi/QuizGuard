using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using QuizGuardApi.Model;

namespace QuizGuardApi.Controllers
{
    [Route("api/result")]
    public class ResultController : Controller
    {
        private readonly LiveContext liveContext;

        public ResultController(LiveContext _liveContext)
        {
            liveContext = _liveContext;
        }

        // GET api/result/5
        [HttpGet("{id}")]
        public IActionResult GetResultDataByUserId(int id)
        {
            var userResult = liveContext.QuizResults.FirstOrDefault(q => q.Id == id);

            if (userResult == null)
            {
                throw new ApplicationException("Invalid user Id");
            }

            var userScore = userResult.Score;
            var highestScore = liveContext.QuizResults.Max(q => q.Score);
            var ranking = liveContext.QuizResults.Count(q => q.Score > userScore) + 1;

            var resultDto = new UserResultDto
            {
                Score = userScore,
                HighestScore = highestScore,
                Ranking = ranking
            };

            var json = JsonConvert.SerializeObject(resultDto);
            return Content(json, "application/json");

        }
    }
}

