async function get()
{
    let user=document.getElementById('enter').value;
    if(user==="")
    {
        document.getElementById('checker').style.visibility='visible';
        document.getElementById('checker').innerHTML='Please enter a username...';
    }
    else
    {
        document.getElementById('data').style.display='none';
        document.getElementById('checker').style.visibility='visible';
        document.getElementById('checker').innerHTML='Loading...';
        let link="https://leetcode-stats-api.herokuapp.com/"+user;
        let data=await fetch(link);
        let res=await data.json();
        let msg=res.status.toString();
        console.log(msg);
        if(msg==="success")
        {  
            document.getElementById('checker').style.visibility='hidden';
            document.getElementById('totalSolved').innerHTML=res.totalSolved.toString();
            document.getElementById('easy').innerHTML=res.easySolved.toString();
            document.getElementById('medium').innerHTML=res.mediumSolved.toString();
            document.getElementById('hard').innerHTML=res.hardSolved.toString();
            document.getElementById('data').style.display='flex';
            document.getElementById('data').style.alignItems='center';
            document.getElementById('data').style.justifyContent='space-evenly';
            document.getElementById('data').style.flexWrap='wrap';
            document.getElementById('square').style.display='flex';
            document.getElementById('square').style.alignItems='center';
            document.getElementById('square').style.justifyContent='center';
        }
        else
        {
            document.getElementById('checker').innerHTML="User not found";
            document.getElementById('data').style.display='none';
        }
    }
}
