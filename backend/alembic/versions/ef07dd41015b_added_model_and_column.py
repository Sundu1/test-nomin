"""Added model and column

Revision ID: ef07dd41015b
Revises: 8879b4ee3f00
Create Date: 2023-12-07 12:11:59.744520

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ef07dd41015b'
down_revision = '8879b4ee3f00'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('category_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'users', 'category', ['category_id'], ['id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.drop_column('users', 'category_id')
    # ### end Alembic commands ###
