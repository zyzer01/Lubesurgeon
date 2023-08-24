import React from 'react';
import Heading from '@/components/utilities/Heading';
import AccordionItem from '@/components/utilities/Accordion';

function FAQ(props) {
    return (
        <div>
            <section className="md:mt-24">
                <Heading
                    headTitle="Frequently Asked Questions"
                />
                <div className="flex flex-col px-6 md:flex-row md:space-x-8 lg:space-x-16 lg:px-20">
                    <div>
                        <AccordionItem
                            title="How can I book a car service with LubeSurgeons?"
                            content="My account was debited without my authorization can I claim back my money ... Hi, Sorry about the deduction of your airtime. Kindly share your complaint via ..."
                        />
                        <AccordionItem
                            title="How can I book a car service with LubeSurgeons?"
                            content="My account was debited without my authorization can I claim back my money ... Hi, Sorry about the deduction of your airtime. Kindly share your complaint via ..."
                        />
                        <AccordionItem
                            title="How can I book a car service with LubeSurgeons?"
                            content="My account was debited without my authorization can I claim back my money ... Hi, Sorry about the deduction of your airtime. Kindly share your complaint via ..."
                        />
                    </div>
                    <div>
                        <AccordionItem
                            title="How can I book a car service with LubeSurgeons?"
                            content="My account was debited without my authorization can I claim back my money ... Hi, Sorry about the deduction of your airtime. Kindly share your complaint via ..."
                        />
                        <AccordionItem
                            title="How can I book a car service with LubeSurgeons?"
                            content="My account was debited without my authorization can I claim back my money ... Hi, Sorry about the deduction of your airtime. Kindly share your complaint via ..."
                        />
                        <AccordionItem
                            title="How can I book a car service with LubeSurgeons?"
                            content="My account was debited without my authorization can I claim back my money ... Hi, Sorry about the deduction of your airtime. Kindly share your complaint via ..."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;