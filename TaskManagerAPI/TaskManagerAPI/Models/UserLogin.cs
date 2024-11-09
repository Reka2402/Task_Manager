using System.ComponentModel.DataAnnotations;

namespace TaskManagerAPI.Models
{
    public class UserLogin
    {
        [Key]
        public Guid UserId { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public Roles Roles { get; set; }
    }
}
