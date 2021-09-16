export default function getEmailDomain(email) {
  return email.match(/(?<=@(?!.*@)).*/)[0]
}
