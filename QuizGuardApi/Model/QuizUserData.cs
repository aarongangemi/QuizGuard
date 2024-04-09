using Newtonsoft.Json;

namespace QuizGuardApi.Model
{
	public class QuizUserData
	{
        [JsonProperty("userId")]

        public int UserId { get; set; }
	}
}

