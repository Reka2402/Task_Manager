using TaskManagerAPI.DTOs.RequestDTO;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.IRepository
{
    public interface IUserRepository
    {
        Task<UserLogin> AddUser(UserLogin user);
        Task<UserLogin> GetUserByEmail(string email);
        Task<UserLogin> Login(LoginRequestModel request);
    }
}
