using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskManagerAPI.DTOs.RequestDTO;
using TaskManagerAPI.IService;

namespace TaskManagerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserservice _userService;

        public UserController(IUserservice userService)
        {
            _userService = userService;
        }
        [HttpPost("login")]

        public async Task<IActionResult> Login(LoginRequestModel request)
        {
            try
            {
                var userDetails = await _userService.Login(request);
                return Ok(userDetails);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("add-user")]

        public async Task<IActionResult> AddUser(UserRequestModel request)
        {
            try
            {
                var userData = await _userService.AddUser(request);
                return Ok(userData);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

