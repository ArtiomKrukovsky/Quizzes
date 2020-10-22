using Microsoft.AspNetCore.Mvc;
using Quizzes.Api.Models;

namespace Quizzes.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        [HttpPost]
        public void Post([FromBody] QuestionViewModel question)
        {

        }
    }
}
