﻿namespace UHR.Models
{
    public class Seat
    {
        public int id { get; set; }

        public Wagon wagon { get; set; }

        public int number { get; set; }

        public bool reserved { get; set; }
    }
}
