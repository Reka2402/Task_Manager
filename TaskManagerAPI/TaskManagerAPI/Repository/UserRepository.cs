using Microsoft.EntityFrameworkCore;
using System;
using TaskManagerAPI.DataBase;
using TaskManagerAPI.DTOs.RequestDTO;
using TaskManagerAPI.IRepository;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly TaskContext _dBContext;

        public UserRepository(TaskContext dBContext)
        {
            _dBContext = dBContext;
        }


        public async Task<UserLogin> AddUser(UserLogin user)
        {
            var userDetails = await _dBContext.users.AddAsync(user);
            await _dBContext.SaveChangesAsync();
            return userDetails.Entity;
        }

        public async Task<UserLogin> GetUserByEmail(string email)
        {
            var user = await _dBContext.users.SingleOrDefaultAsync(u => u.Email == email);
            return user!;
        }

        public async Task<UserLogin> Login(LoginRequestModel request)
        {
            var user = await GetUserByEmail(request.Email);
            if (user == null)
            {
                throw new Exception("User not found");
            }

            var isLogin = BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash);
            if (isLogin)
            {
                return user;
            }
            else
            {
                throw new Exception("Invalid password");
            }
        }
    }
}
