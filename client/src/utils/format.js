export function numberWithCommas(x) {
    return Intl.NumberFormat('en-IN').format(x);

    // const num = new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR" }).format(x);
    // return num;

    // return x.toString().replace(/(\d)(?=(\d\d)+\d$)/g, ",");
    // return x.toString().split('.')[0].length > 3 ? x.toString().substring(0,x.toString().split('.')[0].length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().split('.')[0].length-3): x.toString();
    // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}