using TaskManagerAPI.DTOs.RequestDTO;
using TaskManagerAPI.DTOs.ResponseDTO;

namespace TaskManagerAPI.IService
{
    public interface IUserservice
    {
        Task<UserResponseModel> AddUser(UserRequestModel request);
        Task<UserResponseModel> Login(LoginRequestModel request);
    }
}
