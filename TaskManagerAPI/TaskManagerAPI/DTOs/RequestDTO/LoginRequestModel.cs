﻿namespace TaskManagerAPI.DTOs.RequestDTO
{
    public class LoginRequestModel
    {
 
        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
    }
}