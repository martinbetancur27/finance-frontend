function Price() {
  return (

        <section id="prices">
                <h2 className="title text-center">Prices</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Plan</th>
                            <th>Features</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Basic</td>
                            <td>News + financial advice</td>
                            <td>$10/year</td>
                        </tr>
                        <tr>
                            <td>Premium</td>
                            <td>Basic + advanced analytics</td>
                            <td>$20/year</td>
                        </tr>
                    </tbody>
                </table>

                <button id="buy-plan" className="text-center" type="button">¡Buy Now!</button>
            </section>
  )
}

export default Price;