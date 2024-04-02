using System.Text.Json.Serialization;

namespace QuizGuardApi.Model
{
    public class QuizQuestion
    {
        [JsonPropertyName("text")]

        public string Text { get; set; }

        [JsonPropertyName("order")]

        public int Order { get; set; }

        [JsonPropertyName("options")]

        public List<QuizQuestionOption> Options = new();
    }
}
