import { useState } from "react"
import PieChart from "./PieChart"
import LineChart from "./LineChart"
// import PieChart from "./PieChart"


const Calculator = () => {
  const[loan,setLoan]=useState(0)
  const[salary,setSalary]=useState(0)
  const[data,setData]=useState({
    salary:50,
    loan:50
  })
  const [linedata,setlinedata]=useState(new Array(10).fill(0))

  const handleChange=(e)=>{
 
    switch (e.target.name) {
        case "loanNumber":
            setLoan((parseInt(e.target.value)))
            break;
        case "loanRange":
            setLoan((parseInt(e.target.value)))
            break;
        case "salaryNumber":  
             setSalary((parseInt(e.target.value)))
             break;  
        case "salaryRange":
             setSalary((parseInt(e.target.value)))
             break;
        default:
            break;
    }
   const changeData = {
     salary:parseInt(salary),
     loan:parseInt(loan)
   }
    setData(changeData)

    const newLinedata = linedata.map((item,i)=>{
        if(i<4){
            return 0;
        }
        if(loan!=0) return (i*salary)/loan;
       return salary/(i/2);
    })
    setlinedata(newLinedata)
  }
  return (
    <div className="md:w-4/5 w-[90%] h-5/6 rounded-3xl shadow-lg bg-white border-gray-200 p-5 flex flex-col gap-2" >
        {/* heading */}
        <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="font-medium text-2xl">Estimate Your Future Earnings</h1>
            <p className="text-textPrimaryColor">Evaluate the ROI of your preferred STEM Masters program globally, or consult an expert for alternative course insights.</p>
        </div>
        {/* body */}
        <div className="flex-grow flex flex-col-reverse md:flex-row md:flex">
            {/* range section*/}
            <div className="md:w-5/12 w-full md:h-full h-2/4 md:p-5 b" >
                    <div className="w-full  h-full flex flex-col justify-center items-center" >
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex justify-between">
                                <h2 className="font-normal text-xl text-textPrimaryColor" >Loan Amount</h2>
                                <span>
                                &#x20B9;
                                <input type="number" name="loanNumber" id="loanNumber" value={loan}  className=" w-36 pl-3 outline-none border-black border-b" onChange={handleChange}/>
                                </span>
                               
                            </div>
                            {/* input range */}
                            <div>
                                <input type="range" name="loanRange" id="loanRange" min={0} max={100000000} className="w-full accent-orange-600 cursor-pointer" value={loan} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex justify-between">
                                <h2 className="font-normal text-xl text-textPrimaryColor" >Annual Salary</h2>
                                <span>
                                &#x20B9;
                                <input type="number"  name="salaryNumber" id="salaryNumber" value={salary}  className=" w-36 pl-3 outline-none border-black border-b" onChange={handleChange}/>
                                </span>
                               
                            </div>
                            {/* input range */}
                            <div>
                                <input type="range" name="salaryRange" id="salaryRange" min={0} max={100000000} className="w-full accent-orange-600 cursor-pointer" value={salary} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
            </div>
            {/* chart section */}
       
            <div className="md:w-8/12 w-full md:h-full h-2/4 flex flex-col items-center" >
                <div className="w-2/4 h-1/2">
                 <PieChart KeyData={Object.keys(data)} valueData={Object.values(data)}/>
                </div>
                <div className="w-2/4 h-1/2">
                <LineChart dataline={linedata}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Calculator