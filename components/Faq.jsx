import AccordionItem from '@/components/utilities/AccordionItem';
import Heading from './utilities/Heading';

export const Faq = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <Heading headTitle="Frequently Asked Questions" />
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="space-y-4">
          <AccordionItem title="The quick, brown fox jumps over a lazy dog?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            rem aperiam, eaque ipsa quae.
          </AccordionItem>
          <AccordionItem title="The first mate and his Skipper too will do?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            rem aperiam, eaque ipsa quae.
          </AccordionItem>
          <AccordionItem title="Is the Space Pope reptilian!?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            rem aperiam, eaque ipsa quae.
          </AccordionItem>
          <AccordionItem title="How much money you got on you?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            rem aperiam, eaque ipsa quae.
          </AccordionItem>
        </div>
      </div>
    </div>
  );
};
