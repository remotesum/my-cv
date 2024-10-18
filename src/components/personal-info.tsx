'use client'
import { Phone, Mail, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import cvPhoto from '@/public/cv-photo.png'
import { useState } from 'react'
import { Config } from '@/config/config'

export default function PersonalInfo() {
    const [personalInfo, setPersonalInfo] = useState(Config.personalInfo)

    return (
        <div className="flex justify-between items-center mb-8">
            <div className="flex-1 flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 text-center">{personalInfo.name}</h1>
                    <div className="mt-2 text-sm text-gray-600 space-y-1 text-center">
                        <div className="flex items-center space-x-4 justify-center">
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>{personalInfo.phone}</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                <span>{personalInfo.email}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 justify-center">
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>{personalInfo.address}</span>
                            </div>
                            <div className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                <span>{personalInfo.age}</span>
                            </div>
                        </div>
                        <div>{personalInfo.job} | {personalInfo.status}</div>
                    </div>
                </div>
            </div>
            <Image src={cvPhoto} alt="Profile" width={128} height={128} className="rounded-full object-cover" />
        </div>
    )
}
