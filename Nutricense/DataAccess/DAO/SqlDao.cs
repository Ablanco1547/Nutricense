using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.DAO
{
    public class SqlDao
    {
        private string _connectionString = "";

        private static SqlDao _instance;

        private SqlDao()
        {
            _connectionString = "Data Source=nutricense.database.windows.net;Initial Catalog=2023_nutricense_db;Persist Security Info=True;" +
                "User ID=Sysman;Password=C3nf0t3c!";
        }

        public static SqlDao GetInstance()
        {

            if (_instance == null)
            {
                _instance = new SqlDao();
            }
            return _instance;
        }



        public void ExecuteProcedure(SqlOperation sqlOperation)
        {
            using (var conn = new SqlConnection(_connectionString))
            {
                using (var command = new SqlCommand(sqlOperation.ProcedureName, conn)
                {
                    CommandType = CommandType.StoredProcedure
                })
                {
                    foreach (var param in sqlOperation.Parameters)
                    {
                        command.Parameters.Add(param);
                    }

                    conn.Open();
                    command.ExecuteNonQuery();
                }
            }
        }

        public List<Dictionary<string, object>> ExecuteQueryProcedure(SqlOperation sqlOperation)
        {
            var lstResult = new List<Dictionary<string, object>>();

            using (var conn = new SqlConnection(_connectionString))
            {
                using (var command = new SqlCommand(sqlOperation.ProcedureName, conn)
                {
                    CommandType = CommandType.StoredProcedure
                })
                {
                    foreach (var param in sqlOperation.Parameters)
                    {
                        command.Parameters.Add(param);
                    }

                    conn.Open();

                    var reader = command.ExecuteReader();

                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            var row = new Dictionary<string, object>();

                            for (var index = 0; index < reader.FieldCount; index++)
                            {
                                var key = reader.GetName(index);
                                var value = reader.GetValue(index);

                                row[key] = value;

                            }
                            lstResult.Add(row);
                        }
                    }
                }
            }
            return lstResult;
        }

        public int ExecuteIntQueryProcedure(SqlOperation sqlOperation)
        {
            using (var conn = new SqlConnection(_connectionString))
            using (var command = new SqlCommand(sqlOperation.ProcedureName, conn)
            {
                CommandType = CommandType.StoredProcedure
            })
            {
                foreach (var param in sqlOperation.Parameters)
                {
                    command.Parameters.Add(param);
                }

                conn.Open();

                var result = command.ExecuteScalar();

                if (result != null)
                {
                    int parsedResult;
                    if (int.TryParse(result.ToString(), out parsedResult))
                    {
                        return parsedResult;
                    }
                    else
                    {
                        throw new Exception("Error convirtiendo resultado a entero");
                    }
                }
                else
                {
                    throw new Exception("Valor retornado es nulo");
                }
            }
        }

    }
}
