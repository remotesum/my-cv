import { Phone, Mail, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import cvPhoto from '@/public/cv-photo.png'

export default function PersonalInfo() {
    return (
        <div className="flex justify-between items-center mb-8">
            <div className="flex-1 flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 text-center">杨景煌</h1>
                    <div className="mt-2 text-sm text-gray-600 space-y-1 text-center">
                        <div className="flex items-center space-x-4 justify-center">
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>15323342026</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                <span>snjyor@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 justify-center">
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>广东广州</span>
                            </div>
                            <div className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                <span>29岁</span>
                            </div>
                        </div>
                        <div>后端/数据挖掘/JS全栈 | 待业</div>
                    </div>
                </div>
            </div>
            <Image src={cvPhoto} alt="Profile" width={128} height={128} className="rounded-full object-cover" />
        </div>
    )
}
