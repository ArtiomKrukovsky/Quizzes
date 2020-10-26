using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quizzes.Api.Models;

namespace Quizzes.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly QuizDbContext _context;

        public QuestionsController(QuizDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Question>> Get()
        {
            return await _context.Questions.ToListAsync();
        }
        
        [HttpGet("{quizId}")]
        public async Task<IEnumerable<Question>> Get([FromRoute] int quizId)
        {
            return await _context.Questions.Where(q=> q.QuizId == quizId).ToListAsync();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Question question)
        {
            var quizId = question.QuizId;
            var quiz = await _context.Quiz.SingleOrDefaultAsync(q => q.Id == quizId);

            if (quiz == null)
            {
                return NotFound();
            }

            await _context.Questions.AddAsync(question);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Question question)
        {
            if (id != question.Id)
            {
                return BadRequest();
            }

            _context.Entry(question).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(question);
        }
    }
}
