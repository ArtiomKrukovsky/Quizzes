namespace Quizzes.Api.Models
{
    public class Question
    {
        public int Id { get; set; }

        public string Text { get; set; }

        public string CorrectAnswer { get; set; }

        public string FirstAnswer { get; set; }

        public string SecondAnswer { get; set; }

        public string ThirdAnswer { get; set; }
    }
}