﻿using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccountTransfer.Grains
{
    internal class MemoryCache
    {
        public static HashSet<string> Grains = new HashSet<string>();
    }
}
