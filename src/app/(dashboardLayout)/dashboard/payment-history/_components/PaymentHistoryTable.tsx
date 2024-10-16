"use client"
import { useGetAllPaymentsHistoriesQuery } from "@/redux/features/Payment/paymentApi";
import { TPayment } from "./pamentHistory.types";


const PaymentHistoryTable = () => {
    const {data:allPaymentHistories} = useGetAllPaymentsHistoriesQuery({});
    console.log(allPaymentHistories)
    return (
        <div className="w-full p-4">
        
        <h1 className="text-primary-10 font-Lato text-3xl font-bold mb-5">Manage Payment Histories</h1>
      <table className="min-w-full border-collapse mt-4">
        {/* Table header with rounded corners */}
        <thead className="bg-primary-gradient text-white text-sm rounded-t-xl">
          <tr className="">
            <th className="py-3 px-4 text-left rounded-tl-xl">Tranaction ID</th>
            <th className="py-3 px-4 text-left">Amount</th>
            <th className="py-3 px-4 text-left">User ID</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left rounded-tr-xl">Action</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {allPaymentHistories?.data?.map((history:TPayment) => (
            <tr key={history?._id} className="border-b bg-gray-50">
              <td className="py-3 px-4">{history.transactionId}</td>
              <td className="py-3 px-4">{history.amount}</td>
              <td className="py-3 px-4">{history.userId}</td>
              <td className="py-3 px-4">{history.name}</td>
              <td className="py-3 px-4">{history.email}</td>
              <td className="py-3 px-4 relative">
                <button className="bg-primary-gradient text-white px-3 py-2 rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default PaymentHistoryTable;