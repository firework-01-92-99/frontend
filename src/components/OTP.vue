<template>
    <div class="fixed flex justify-center items-center">
        <div class="flex xl:flex-row flex-col">
            <div class="xl:pl-28 mx-auto xl:mx-0">
                <div class="xl:text-6xl text-3xl text-center xl:text-left my-6 xl:my-0">OTP Verification</div>
                <div class="xl:text-lg text-sm px-5 xl:px-0 text-gray-400">
                    Enter the confirmation code sent to
                    <span class="text-blue-600">{{ email }}</span>
                    <br />and click buttom confirm to complete the process.
                </div>
                <OtpInput v-model="otp" classtext="xl:w-16 w-8 xl:text-5xl text-2xl"/>
                <div
                    v-if="!validateotp"
                    class="text-red-600 text-base font-thin -mb-6 text-center xl:text-left"
                >*{{ validatetext }}</div>
                <div
                    class="text-lg xl:mt-16 mt-10 flex xl:flex-row flex-col justify-between items-center xl:items-start"
                >
                    <button
                        class="xl:mr-8 xl:-mt-1.5 mt-6 bg-orange text-white px-6 rounded-lg py-1"
                        
                    >ยืนยันรหัส OTP</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import OtpInput from "./OtpInput.vue"
export default {
    components: {
        OtpInput
    },
    props: {
        email: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            otp: '',
            validateotp: true,
            validatetext: ''
        }
    },
    watch: {
        // otp: function otpCheck() {
        //     if (!this.validateotp) {
        //         this.validateotp = this.otp.length === 6
        //         this.validatetext = 'กรุณาใส่ค่าให้ครบ'
        //     }
        // }
    },
    methods: {

    },
}
</script>