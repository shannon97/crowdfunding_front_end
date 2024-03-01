import PageLayout from '../components/PageLayout';
import '../index.css'

function AboutPage() {
    return (
        <PageLayout>
            <div className="px-10 flex flex-col items-center">
                <div className="w-full bg-white border-t border-b p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                    <h1 className="text-4xl font-bold text-slate-800 underline text-center mb-5">ABOUT US</h1>
                </div>

                <div className="flex flex-col items-center w-full">
                    <br/>
                    <p>Welcome to the community of Circle of Suppawt!</p>
                    <br/>
                    <p>At Circle of Suppawt, we believe that every pet's life is precious. Our mission is simple: to provide a helping hand to pets in need, regardless of their size, breed, or background. We understand that our furry friends are not just pets; they are cherished members of our families, bringing joy, love, and companionship into our lives.</p>
                    <br/>
                    <p>Our crowdfunding platform was created with a singular purpose: to ensure that every pet receives the medical care they deserve. From routine check-ups to life-saving surgeries, we strive to alleviate the financial burden on pet owners facing unexpected vet bills. But we go beyond just financial assistance; we offer hope, compassion, and a sense of community to those navigating difficult times with their beloved companions.</p>
                    <br/>
                    <p>But we can't do it alone. We rely on the generosity and compassion of animal lovers like you to make a difference. By joining our circle, you become part of a community dedicated to making the world a better place for pets in need. Your support, whether through donations, sharing our mission, or volunteering your time, has the power to transform lives and create brighter futures for countless furry companions.</p>
                    <br/>
                    <p>Together, we can make miracles happen, one paw at a time. Join us in our journey of love, hope, and healing, and let's make sure that no pet is ever left behind.</p>
                    <br/>
                    <p>Thank you for being a part of our Circle of Suppawt family.</p>
                </div>
                <br/>
                <div className="px-10 flex flex-col items-center">
                        <img src="imgs/logo.png" alt="Logo" className="w-2/3" />
                </div>

            </div>
        </PageLayout>
    );
}

export default AboutPage;