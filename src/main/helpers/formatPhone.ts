export function formatPhone(phone: String) {
    const country = (phone: String) => phone.substring(0, 3);
    const ddd = (phone: String) => phone.substring(3, 5);
    const number1 = (phone: String) => phone.substring(5, 10); 
    const number2 = (phone: String) => phone.substring(10, 14); 
    return country(phone) + " " + ddd(phone) + " " + number1(phone) + "-" + number2(phone);
}