using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quizzes.Api.Models;

namespace Quizzes.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizzesController : ControllerBase
    {
        public readonly QuizDbContext _context;

        public QuizzesController(QuizDbContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<Quiz>> Get()
        {
            var userId = HttpContext.User.Claims.First().Value;
            var quizzes = await _context.Quiz.Where(q=> q.OwnerId == userId).ToListAsync();
            return quizzes;
        }

        [Authorize]
        [HttpPost]
        public async Task Post([FromBody] Quiz quiz)
        {
            var userId = HttpContext.User.Claims.First().Value;

            quiz.OwnerId = userId;
            await _context.Quiz.AddAsync(quiz);
            await _context.SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Quiz quiz)
        {
            if (id != quiz.Id)
            {
                return BadRequest();
            }

            _context.Entry(quiz).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(quiz);
        }
    }
}
