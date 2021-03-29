import { EntityRepository, Repository } from 'typeorm';
import User from '../infra/typeorm/entities/User';

@EntityRepository(User)
class ToolsRepository extends Repository<User> {}

export default ToolsRepository;
