namespace QuizGuardApi.Model
{
    public class QuizQuestion
    {
        public string Text { get; set; }
        public int Order { get; set; }
        public List<QuizQuestionOption> Options = new();
    }
}
