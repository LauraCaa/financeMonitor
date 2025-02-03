import "@/assets/styles.css";
import Data from "@/utils/transaction.json";

export default function index() {
    return(
        <div className="main-div">
            <h1>{Object.keys(Data)}</h1>
            <table>
                <tbody>
                    {Data.transactions.map((transaction, index)=>(
                    <tr key={index}>
                        <td className="img-td">
                            <img src={transaction.image} alt="user-photo"/>
                        </td>
                        <td>{transaction.name}</td>
                        <td>{transaction.createdAt}</td>
                        <td className={`number-style ${transaction.amount.indexOf("-") === -1 ? "text-green" : "text-red"}`}>{transaction.amount.indexOf("-") !== -1 ? transaction.amount: "+" + transaction.amount}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
// 32.26.26