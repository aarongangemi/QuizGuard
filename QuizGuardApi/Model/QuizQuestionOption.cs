using Newtonsoft.Json;

namespace QuizGuardApi.Model
{
    public class QuizQuestionOption
    {
        [JsonProperty("text")]
        public string Text { get; set; }

        [JsonProperty("isCorrect")]
        public bool IsCorrect { get; set; }
    }
}
