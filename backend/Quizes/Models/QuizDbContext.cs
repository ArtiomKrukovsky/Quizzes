﻿using Microsoft.EntityFrameworkCore;

namespace Quizzes.Api.Models
{
    public class QuizDbContext: DbContext
    {
        public QuizDbContext(DbContextOptions<QuizDbContext> options): base(options) { }

        public DbSet<Question> Questions { get; set; }
    }
}