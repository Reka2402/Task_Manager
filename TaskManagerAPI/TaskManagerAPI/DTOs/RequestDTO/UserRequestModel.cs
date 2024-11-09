using TaskManagerAPI.Models;

namespace TaskManagerAPI.DTOs.RequestDTO
{
    public class UserRequestModel
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public Roles Role { get; set; }
    }
}
