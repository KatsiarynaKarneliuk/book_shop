
datePickerId.min = new Date().toISOString().split("T")[0];

function is_dash_numb(str)
{
 regexp = /^[0-9\-]+$/i;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}