using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebAPI.Controllers
{
	public class CodeList : ApiController
	{
		// GET api/<controller>
		public IEnumerable<DC_PLT_Support_CodeLists> Get()
		{
			using (ExampleDataEntities obj =new ExampleDataEntities())
			{
				return obj.DC_PLT_Support_CodeLists.ToList();
			}
		}

		// GET api/<controller>/5
		public DC_PLT_Support_CodeLists Get(string code)
		{
			using (ExampleDataEntities obj = new ExampleDataEntities())
			{
				return obj.DC_PLT_Support_CodeLists.FirstOrDefault(e => e.Code == code);
			}
		}

		// POST api/<controller>
		public void Post([FromBody]string value)
		{
		}

		// PUT api/<controller>/5
		public void Put(int id, [FromBody]string value)
		{
		}

		// DELETE api/<controller>/5
		public void Delete(int id)
		{
		}
	}
}