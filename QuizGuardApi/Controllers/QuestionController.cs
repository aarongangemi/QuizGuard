using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic.FileIO;
using Newtonsoft.Json;
using QuizGuardApi.Model;
using System.Text.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QuizGuardApi.Controllers
{
    [Route("api/Questions")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        // GET: api/<QuestionController>
        [HttpGet]
        public ContentResult Get()
        {
            List<QuizQuestion> allQuestions = new List<QuizQuestion>();
            allQuestions.AddRange(QuestionData.MalwareQuestions);
            allQuestions.AddRange(QuestionData.PhishingQuestions);
            allQuestions.AddRange(QuestionData.MitmQuestions);
            allQuestions.AddRange(QuestionData.DdosQuestions);

            var json = JsonConvert.SerializeObject(allQuestions);
            return Content(json, "application/json");
        }
    }
}

