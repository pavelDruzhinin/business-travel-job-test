using System;
using System.Security.Cryptography;
using System.Text;

namespace BusinessTravelJob.Infrastructure
{
    public class HttpQueryKeyGenerator
    {
        public string Generate(string source)
        {
            using var hash = SHA256.Create();
            
            return Base64Encode(GetHash(hash, source));
        }

        private byte[] GetHash(HashAlgorithm hash, string input)
        {
            return hash.ComputeHash(Encoding.UTF8.GetBytes(input));
        }

        private string Base64Encode(byte[] plainTextBytes)
        {
            return Convert.ToBase64String(plainTextBytes);
        }
    }
}