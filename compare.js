let obj1={name:"person1",age:"5"};
let obj2={age:"9",name:"person1"};
let key1=Object.keys(obj1);
let key2=Object.keys(obj2);
let result=true;
if(key1.length==key2.length)
{
    for(let i=0;i<obj1.length;i++)
    {
       if(obj1[i]!=obj2[i])
       {
       result=false;
       console.log(result);
       break;
      }
     
      }
    }
    else {result=true}
            console.log(result);
