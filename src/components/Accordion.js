import {Item} from '../data/AccordionData';

function AccordionComponent() {
    const accordionItem = Item.map(accordionItemHeadline =>
        <details>
            <summary>
                {accordionItemHeadline.headline}
            </summary>
            <p>

            </p>
        </details>

    )
    return (
        <ul>
            {accordionItem}
        </ul>
    )
}

export default function Accordion() {
    return (
        <AccordionComponent />
    )
}