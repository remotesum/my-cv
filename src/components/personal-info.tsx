import { Phone, Mail, MapPin, User } from 'lucide-react'
import cvPhoto from '@/public/cv-photo.png'

export default function PersonalInfo() {
    return (
        <div className="flex justify-between items-center mb-8">
            <div className="flex-1 flex justify-center">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900">杨景煌</h1>
                    <div className="mt-2 text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            <span>15323342026</span>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            <span>snjyor@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>广东广州</span>
                        </div>
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span>29岁 | 男 | 江西赣州</span>
                        </div>
                        <div>待业 | Python/后端/JS全栈</div>
                    </div>
                </div>
            </div>
            <img src={cvPhoto.src} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
        </div>
    )
}
