using Newtonsoft.Json;

namespace QuizGuardApi.Model
{
    public class QuizQuestion
    {
        [JsonProperty("text")]

        public string Text { get; set; }

        [JsonProperty("order")]

        public int Order { get; set; }

        [JsonProperty("options")]

        public List<QuizQuestionOption> Options = new();

        [JsonProperty("explainer")]
        public string Explainer { get; set; }
    }
}
