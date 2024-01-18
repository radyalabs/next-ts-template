import Toaster from '@/components/base/Toaster';
import useToasterStore from '@/stores/toaster';

const ToasterContainer = () => {
  const messages = useToasterStore((state) => state.messages);

  return (
    <div className="absolute top-0 w-full h-72 flex flex-col gap-3">
      {messages.map(({ context, message, id }) => (
        <Toaster
          key={id}
          context={context}
          message={message}
        />
      ))}
    </div>
  );
};

export default ToasterContainer;
