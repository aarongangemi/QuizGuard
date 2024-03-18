using Microsoft.EntityFrameworkCore;

namespace QuizGuardApi.Model
{
    public class LiveContext : DbContext
    {
        public DbSet<QuizResult> QuizResults { get; set; }

        public LiveContext(DbContextOptions options) : base(options)
        { }
    }
}
