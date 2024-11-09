using TaskManagerAPI.Models;

namespace TaskManagerAPI.DTOs.ResponseDTO
{
    public class UserResponseModel
    {
        public Guid UserId { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public Roles Role { get; set; }
    }
}
