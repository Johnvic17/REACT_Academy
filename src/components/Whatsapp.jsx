import { FloatingWhatsApp } from "react-floating-whatsapp"

const Whatsapp = () => {
  return (
    <div>
        <FloatingWhatsApp
              phoneNumber="+5521965471951"
              accountName="Service"
              avatar="https://i.pravatar.cc/304"
              statusMessage="Usually responds within a few minutes"
              chatMessage="Hello! how can we help you?"
        />
    </div>
  )
}

export default Whatsapp