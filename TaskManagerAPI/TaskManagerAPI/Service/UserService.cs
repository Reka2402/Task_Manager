using TaskManagerAPI.DTOs.RequestDTO;
using TaskManagerAPI.DTOs.ResponseDTO;
using TaskManagerAPI.IRepository;
using TaskManagerAPI.IService;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Service
{
   
        public class UserService : IUserservice
        {
            private readonly IUserRepository _userRepository;

            public UserService(IUserRepository userRepository)
            {
                _userRepository = userRepository;
            }

            public async Task<UserResponseModel> AddUser(UserRequestModel request)
            {
                var user = await _userRepository.GetUserByEmail(request.Email);
                if (user == null)
                {
                    var userObj = new UserLogin()
                    {
                        FullName = request.FullName,
                        Email = request.Email,
                        PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
                        Roles = ((Roles)request.Role),
                    };

                    var userData = await _userRepository.AddUser(userObj);

                    var response = new UserResponseModel()
                    {
                        UserId = userData.UserId,
                        FullName = userData.FullName,
                        Email = userData.Email,
                        Role = userData.Roles,
                    };

                    return response;
                }
                else
                {
                    throw new Exception("User already exists");
                }
            }

            public async Task<UserResponseModel> Login(LoginRequestModel request)
            {
                var userDetails = await _userRepository.Login(request);
                var response = new UserResponseModel()
                {
                    UserId = userDetails.UserId,
                    FullName = userDetails.FullName,
                    Email = userDetails.Email,
                    Role = userDetails.Roles,
                };

                return response;
            }
        }
    }

