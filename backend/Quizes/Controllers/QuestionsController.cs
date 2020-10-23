using System.Collections.Generic;
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

        [HttpPost]
        public async Task Post([FromBody] Question question)
        {
            await _context.Questions.AddAsync(question);
            await _context.SaveChangesAsync();
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
