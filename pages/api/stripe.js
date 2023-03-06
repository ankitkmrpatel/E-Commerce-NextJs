import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRITE_SECRET_KEY);

export default async function handler(req, res) {
  console.log('Request Received', req.method, req.body);
  if (req.method == 'POST') {
    try {
      const cartItems = req.body;

      const itemsDetails = cartItems.map((item) => {
        const img = item.image[0].asset._ref;
        const newIMage = img.replace('image-', 'https://cdn.sanity.io/images/190vo6ys/production/').replace('-webm', '.webm');

        //console.log(newIMage);
        return {
          price_data: {
            currency: 'inr',
            product_data: {
              name: item.name,
              images: [newIMage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 15,
          },
          //price: item.price,
          quantity: item.quantity,
        };
      });

      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [{ shipping_rate: 'shr_1MgaeaSCFnc7h608OXHqUtvT' }, { shipping_rate: 'shr_1Mgag7SCFnc7h6082ViKC9hs' }],
        line_items: itemsDetails,
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    //res.status(405).end({ statusCode: 405, message: 'Method Not Allowed' });
    res.status(405).end({ statusCode: 405, message: 'Method Not Allowed' });
  }

  //res.end();
}
