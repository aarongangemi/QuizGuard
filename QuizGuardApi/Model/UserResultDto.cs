using Newtonsoft.Json;

namespace QuizGuardApi.Model
{
	public class UserResultDto
	{
        [JsonProperty("score")]
        public int Score { get; set; }

        [JsonProperty("ranking")]
        public int Ranking { get; set; }

        [JsonProperty("highestScore")]
        public int HighestScore { get; set; }
	}
}

