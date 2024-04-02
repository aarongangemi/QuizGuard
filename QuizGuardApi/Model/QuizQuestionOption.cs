using System.Text.Json.Serialization;

namespace QuizGuardApi.Model
{
    public class QuizQuestionOption
    {
        [JsonPropertyName("text")]
        public string Text { get; set; }

        [JsonPropertyName("isCorrect")]
        public bool IsCorrect { get; set; }
    }
}
